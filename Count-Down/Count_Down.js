const EndDate = '31 December 2110 12:00 AM'

document.getElementById("End-Date").innerText = EndDate;
const input = document.querySelectorAll("input") 
//const clock = () => {

// }

function clock() {

  const end = new Date(EndDate);
  const now =  new Date()
  const Difference =  (end - now) / 1000 ;

  // This Function will Stop The Clock
  if (Difference < 0) return;

  // Convert into Days !!
  input[0].value = ( Math.floor(Difference / 3600 / 24))
  // Convert into Hours !!
  input[1].value = ( Math.floor(Difference / 3600 ) % 24);
  // Convert into Minutes  !!
  input[2].value = ( Math.floor(Difference / 60 ) % 60);
  // Convert into Seconds !!
  input[3].value = ( Math.floor(Difference) % 60);
// Convert into Days !!
}
//Initial Call....
clock()

//Page Referesh EverySecond...
setInterval(
  () =>  {
     clock()
  },
  1000
)