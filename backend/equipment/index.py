import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Управление оборудованием - получение списка, добавление, обновление
    Args: event с httpMethod, body, queryStringParameters
    Returns: HTTP response с данными оборудования
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    db_url = os.environ.get('DATABASE_URL')
    conn = psycopg2.connect(db_url)
    cur = conn.cursor()
    
    if method == 'GET':
        cur.execute('SELECT id, name, type, status, next_service, cost, location FROM equipment ORDER BY id')
        rows = cur.fetchall()
        equipment_list = []
        for row in rows:
            equipment_list.append({
                'id': row[0],
                'name': row[1],
                'type': row[2],
                'status': row[3],
                'nextService': row[4],
                'cost': row[5],
                'location': row[6]
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
            'body': json.dumps(equipment_list, ensure_ascii=False)
        }
    
    if method == 'POST':
        body_data = json.loads(event.get('body', '{}'))
        
        cur.execute(
            'INSERT INTO equipment (name, type, status, next_service, cost, location) VALUES (%s, %s, %s, %s, %s, %s) RETURNING id',
            (body_data['name'], body_data['type'], body_data['status'], body_data.get('nextService', ''), body_data.get('cost', 0), body_data.get('location', ''))
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
            'body': json.dumps({'id': new_id, 'message': 'Оборудование добавлено'}, ensure_ascii=False)
        }
    
    if method == 'PUT':
        body_data = json.loads(event.get('body', '{}'))
        equipment_id = body_data.get('id')
        
        cur.execute(
            'UPDATE equipment SET name=%s, type=%s, status=%s, next_service=%s, cost=%s, location=%s WHERE id=%s',
            (body_data['name'], body_data['type'], body_data['status'], body_data.get('nextService', ''), body_data.get('cost', 0), body_data.get('location', ''), equipment_id)
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
            'body': json.dumps({'message': 'Оборудование обновлено'}, ensure_ascii=False)
        }
    
    cur.close()
    conn.close()
    
    return {
        'statusCode': 405,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Method not allowed'})
    }
