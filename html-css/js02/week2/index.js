//1
const doubleOddNumbers = (numbers) => {
    let num = numbers.filter(even => even%2 !== 0).map(number => number%2 !==0 && number*2)
    return num
}

  const myNumbers = [1, 2, 3, 4];
  console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]

  //2
  const monday = [
    {
      name: 'Write a summary HTML/CSS',
      duration: 180
    },
    {
      name: 'Some web development',
      duration: 120
    },
    {
      name: 'Fix homework for class10',
      duration: 20
    },
    {
      name: 'Talk to a lot of people',
      duration: 1.0
    }
  ];
//2
  const mondayWork = monday.filter(mon=> mon.duration>119).map(mon=> mon.duration/60).reduce((acc, value) => "$"+((acc+value)*20).toFixed(2))
  console.log(mondayWork)

  const tuesday = [
    {
      name: 'Keep writing summary',
      duration: 1.0
    },
    {
      name: 'Some more web development',
      duration: 180
    },
    {
      name: 'Staring out the window',
      duration: 10
    },
    {
      name: 'Talk to a lot of people',
      duration: 1.0
    },
    {
      name: 'Look at application assignments new students',
      duration: 40
    }
  ];

  const tuesdayWork = tuesday.filter(tue=> tue.duration>119).map(tue=> tue.duration/60).reduce(function(acc, value){
      return `$${20*(acc + value).toFixed(2)}`
  }, 0 )
  console.log(tuesdayWork)
  