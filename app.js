// quesion no 1 


for (let i = 0; i < 5; i++) {
    document.write("Hello World <br>");
}


// question no 2 


for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}


// questiion no 3


let tableNumber = parseInt(prompt("Enter the table number:"));
            let tableLength = parseInt(prompt("Enter the table length:"));

            let tableHTML = "<h2>Multiplication Table of " + tableNumber + "</h2>";
            tableHTML += "<table border='1'>";
            tableHTML += "<tr><th>Multiplier</th><th>Result</th></tr>";

            
            for (let i = 1; i <= tableLength; i++) {
                let result = tableNumber * i;
                tableHTML += "<tr><td>" + tableNumber + " x " + i + "</td><td>" + result + "</td></tr>";
            }

            tableHTML += "</table>";

      
            document.body.innerHTML += tableHTML;
            

    // question no 4 

    let items = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

    // Using a for loop to print array items
    for (let i = 0; i < items.length; i++) {
        document.write(items[i] + "<br>");
    }


    // question no 5 


    let bakeryItems = ["Bread", "Cake", "Cookies", "Croissant", "Donut", "Muffin", "Pastry", "Pie"];

    function searchItem() {
        // Get the search query entered by the user
        let searchQuery = document.getElementById('searchInput').value;

        // Check if the search query exists in the bakery items list
        if (bakeryItems.includes(searchQuery)) {
            console.log(" is found in the bakery items list.");
        } else {
            console.log();( "' is not found in the bakery items list.");
        }
    }


    // question no 6


    let numbers = [45, 23, 67, 89, 12, 56, 34, 78];


    let largestNumber = numbers[0];


    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }
console.log("The largest number in the array is: " + largestNumber);


    // question no 7


    let numbersof= [45, 23, 67, 89, 12, 56, 34, 78];


    let smallestNumber = numbersof[0];


    for (let i = 1; i < numbersof.length; i++) {
        if (numbersof[i] < smallestNumber) {
            smallestNumber = numbersof[i];
        }
    }

    console.log("The smallest number in the array is: " + smallestNumber);