

/* Start of Searchbar */
const search = () =>{
    const searchbox = document.getElementById("search").value.toUpperCase();
    const storeCalc = document.getElementById("calculator-slots");
    const calculator = document.querySelectorAll(".slot");
    const calculatorName = storeCalc.getElementsByClassName("name");

    for(var i = 0; i< calculatorName.length; i++) {
        let match = calculator[i].getElementsByClassName("name")[0];
        if(match) {
            let text = match.textContent || match.innerHTML;
            if (text.toUpperCase().indexOf(searchbox) > -1){
                calculator[i].style.display = "";
            } 
            else {
                calculator[i].style.display = "none";
            }
            
            
        }
    }
}
/* End of Searchbar */

/* Button Alert */
function addedToCart() {
    alert("Added Successfully!");
  }



