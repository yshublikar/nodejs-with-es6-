export default {
	err(err){
		return ({"status": "error","error": err});
	},
	success(data, msg){
		return ({"status": "success", "message": msg, "docs": data});
	}
}