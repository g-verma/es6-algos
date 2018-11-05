const seprator = () => {
    console.log("========>");
};

seprator();

//int reverse
const rev = inte => 
parseInt(
    inte
    .toString()
    .split("")
    .reverse()
    .join("")
) * Math.sign(inte);

console.log(rev(1234));


//string reverse