import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Управление заявками на ремонт - получение, создание, обновление статуса
    Args: event с httpMethod, body
    Returns: HTTP response с данными заявок
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    db_url = os.environ.get('DATABASE_URL')
    conn = psycopg2.connect(db_url)
    cur = conn.cursor()
    
    if method == 'GET':
        cur.execute('SELECT id, equipment, issue, priority, date, status FROM repair_requests ORDER BY id DESC')
        rows = cur.fetchall()
        requests_list = []
        for row in rows:
            requests_list.append({
                'id': row[0],
                'equipment': row[1],
                'issue': row[2],
                'priority': row[3],
                'date': row[4],
                'status': row[5]
            })
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps(requests_list, ensure_ascii=False)
        }
    
    if method == 'POST':
        body_data = json.loads(event.get('body', '{}'))
        
        cur.execute(
            'INSERT INTO repair_requests (equipment, issue, priority, date, status) VALUES (%s, %s, %s, %s, %s) RETURNING id',
            (body_data['equipment'], body_data['issue'], body_data['priority'], body_data['date'], body_data.get('status', 'Новая'))
        )
        new_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()
        
        return {
            'statusCode': 201,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'id': new_id, 'message': 'Заявка создана'}, ensure_ascii=False)
        }
    
    if method == 'PUT':
        body_data = json.loads(event.get('body', '{}'))
        request_id = body_data.get('id')
        
        cur.execute(
            'UPDATE repair_requests SET status=%s WHERE id=%s',
            (body_data['status'], request_id)
        )
        conn.commit()
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'message': 'Статус обновлен'}, ensure_ascii=False)
        }
    
    cur.close()
    conn.close()
    
    return {
        'statusCode': 405,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Method not allowed'})
    }
