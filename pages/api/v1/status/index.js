import database from '../../../../infra/lib/db.js';

function status(request, response) {
    console.log('Data base:', database);
    response.status(200).json({key: "go ahead!!"})
}

export default status;