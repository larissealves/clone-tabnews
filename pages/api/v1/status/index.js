import { Result } from 'pg';
import database from 'infra/lib/db.js';

async function status(request, response) {
    const updatedAt = new Date().toISOString();

    response.status(200).json({
        updated_at: updatedAt,
    })
}

export default status;