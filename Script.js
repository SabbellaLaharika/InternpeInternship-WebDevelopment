let outScr = document.getElementById("output-screen");

		function display(num){
			outScr.value += num;
		}
		function Calculate(){
			try{
				outScr.value = eval(outScr.value);
			}
			catch(err)
			{
				alert("Invalid")
			}
		}
		function Clear(){
			outScr.value = "";
		}
		function del() {
			outScr.value = outScr.value.slice(0,-1); 
		}