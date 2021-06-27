var xbutton = document.getElementById('convert_img');
var xbutton2 = document.getElementById('convert_url');
xbutton.addEventListener('click', function(){ uploading_files(converting) });
xbutton2.addEventListener('click', optimizing_url);

	async function uploading_files(callback){
	    const url = 'uploading.php';
	    const form = document.querySelector('form');
	    var objname = document.getElementById('image').value;
	    const filename = objname.replace(/^.*\\/, "");
	    
	    form.addEventListener('submit', (e) => {
	        e.preventDefault();
	                
	        const files = document.querySelector('#image').files;
	        const formData = new FormData();
	        
		for (let i = 0; i < files.length; i++) {
	            let file = files[i];
	            formData.append('image', file);
	        }
	        fetching1();
		
	        async function fetching1(){
		        await fetch(url, {
		            method: 'POST',
		            body: formData
		        })
		        .then((response) => {
		            //console.log(response);
		        });
	        }
	        
	    });
	    callback(filename);
	}

	async function converting(){

		const urlupload = "http://api.resmush.it/ws.php?img=";
		var objname = document.getElementById('image').value;
		var filename = objname.replace(/^.*\\/, "");
		//console.log(filename);
		const imagedir = "http://tansawiguna.me/image/"+ filename;
		//console.log(objname);
		
			fetch(urlupload+imagedir)
			.then(response=>response.json())
			.then(Data=>{
			    console.log(Data);
			    	document.getElementById('result').innerHTML = 
				    "<table class='table col-12'>"+
					  "<thead>"+
					    "<tr>"+
					      "<th scope='col'>Original download</th>"+
					      "<th scope='col'>Original size</th>"+
					      "<th scope='col'>Optimized size</th>"+
					      "<th scope='col'>Download</th>"+
					    "</tr>"+
					  "</thead>"+
					  "<tbody>"+
					    "<tr>"+
					      "<td scope='row'> <a href='"+Data.src+"' target='_blank'><button type='button' class='btn btn-primary'> Original </button></a> </td>"+
					      "<td>"+Data.src_size+"</td>"+
					      "<td>"+Data.dest_size+"</td>"+
					      "<td><a href='"+Data.dest+"' target='_blank'><button type='button' class='btn btn-primary'> Download </button></a></td>"+
					    "</tr>"+
					  "</tbody>"+
				    "</table>";
				       
			         document.getElementById('optimize').alt = "Optimized Image";
			         document.getElementById('optimize').src = Data.dest;
			         document.getElementById('res').alt = "Original Image";
			         document.getElementById('res').src = Data.src;
			    }).then(function(){
				    cuteAlert({
						type: "success",
						title: "Image Optimized",
						message: "Anda berhasil melakukan image optimizing",
						buttonText: "OKAY"
					})
			    });
			//.catch(error => {
			//	cuteAlert({
			//		type: "warning",
			//		title: "Jaringan!!!",
			//		message: "Silahkan klik convert sekali lagi!",
			//		buttonText: "OKAY"
			//	})
			//});
	}
	
	function optimizing_url(){
	
		    var url = document.getElementById('img_url').value;
			//console.log(url);
		    fetch("http://api.resmush.it/ws.php?img="+url)
		    .then(Response=>Response.json())
		    .then(Data=>{
		        //console.log(Data);
		        document.getElementById('result').innerHTML = 
			    "<table class='table col-12'>"+
				  "<thead>"+
				    "<tr>"+
				      "<th scope='col'>Original download</th>"+
				      "<th scope='col'>Original size</th>"+
				      "<th scope='col'>Optimized size</th>"+
				      "<th scope='col'>Download</th>"+
				    "</tr>"+
				  "</thead>"+
				  "<tbody>"+
				    "<tr>"+
				      "<td scope='row'> <a href='"+Data.src+"' target='_blank'><button type='button' class='btn btn-primary'> Original </button></a> </td>"+
				      "<td>"+Data.src_size+"</td>"+
				      "<td>"+Data.dest_size+"</td>"+
				      "<td><a href='"+Data.dest+"' target='_blank'><button type='button' class='btn btn-primary'> Download </button></a></td>"+
				    "</tr>"+
				  "</tbody>"+
			    "</table>";
		        document.getElementById('optimize').alt = "Optimized Image";
		        document.getElementById('optimize').src = Data.dest;
		        document.getElementById('res').alt = "Original Image";
		        document.getElementById('res').src = Data.src;
		    }).then(function(){
			    cuteAlert({
					type: "success",
					title: "Image Optimized",
					message: "Anda berhasil melakukan image optimizing",
					buttonText: "OKAY"
				})
		    });
		};