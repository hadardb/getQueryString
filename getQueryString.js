function getQueryString(name) {
					if(typeof(name)=='string'){
						var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
						var r = window.location.search.substr(1).match(reg)
						if (r != null) {
							return decodeURIComponent(r[2])
				  		}
				  		return null
					}
					else if(Array.isArray(name)){
						console.log('----')
						var z=[]
						name.forEach(function(e,index){
							console.log(e)
							var reg = new RegExp('(^|&)' + e + '=([^&]*)(&|$)', 'i')
							var r = window.location.search.substr(1).match(reg)
							if(r!=null){
								z[index]=decodeURIComponent(r[2])
							}
							else z[index]=''
						})
				  		return z
					}
					else return null
				}
