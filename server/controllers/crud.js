import musicModel from '../models/music';
import response from '../response';

export default {
    create({ body }, res) {
        console.log("body", body)
        musicModel.create(body, function(err, doc) {
            if (err)
                response.err(err);

            let msg = "record successfully added";
            res.json(response.success(doc, msg));
        })
    },

    search({ query }, res) {
        let key = query.q;
        if (key != undefined) {
            musicModel.find({ title: { $regex: new RegExp(key, "i") } }, function(err, data) {
                if (err)
                    response.err(err);
                else if (data != '')
                    res.json(response.success(data, "record found"));
                else
                    res.json(response.success(data, "No records"));
            })
        }else{
        	res.json(response.success(null, "No records"));
        }
    },

    update({params, body}, res){
    	musicModel.findOneAndUpdate({_id: params.id}, body, {new : true}, function(err, data){
    		if (err)
                response.err(err);

            let msg = "record successfully updated";
            res.json(response.success(data, msg));
    	})
    },

    remove({params}, res){
    	musicModel.remove({_id: params.id},function(err, data){
    		if (err)
                response.err(err);

            let msg = "record successfully deleted";
            res.json(response.success(null, msg));
    	})
    }
}