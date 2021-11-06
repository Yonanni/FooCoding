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

const monAndTue = monday.concat(tuesday);
function calculator(arr) {
  let hours = arr.map((min) => min.duration / 60).filter((hours) => hours >= 2); // =>[3,2,3]
  let values = hours.map((hour) => hour * 20) // =>[60,40,60]
    .reduce((sum, value) => sum + value); // =>160
  return `The earning is €${Math.round(values)}`;
}
calculator(monAndTue);