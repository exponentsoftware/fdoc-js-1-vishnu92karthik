function checkUniqueness(myArray) 
    {
        for (var i = 0; i < myArray.length; i++) 
        {
            for (var j = i; j < myArray.length; j++) 
            {
                if (i != j) 
                {
                    if (myArray[i] === myArray[j]) 
                    {
                        return false; 
                    }
                }
            }
        }
        return true; 
    }
    const arrOne = [1, 4, 6, 2, 1];
    const arrTwo = [1, 4, 6, 2, 3];

    
 console.log(checkUniqueness(arrTwo));