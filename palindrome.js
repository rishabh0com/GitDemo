function palindrome(x)
{
    let y = "";
    y = y + x;
    
    let bag = "";

    for(let i = y.length-1; i >= 0; i--)
    {
        bag += y[i];
       
    }
    
    console.log(bag,"-",y)
    
    if(bag == y)
    {
        console.log(x," is palindrome");
    }
    else
    {
        console.log(x," is not palindrome");
    }
}

palindrome("naman");
palindrome(2332);
palindrome(19);