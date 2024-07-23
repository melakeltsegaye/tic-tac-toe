import React, {useState} from 'react'

const Navbar = () => {
    const [ar, stat] = useState(Array(9).fill(null));
    const [xturn, chanx] = useState(true);

    const handleClick = (index) => {
      const newSquares = ar.slice();
      if (calculateWinner(ar) || ar[index]) return;
      newSquares[index] = xturn ? 'X' : 'O';
      stat(newSquares);
      chanx(!xturn);
    };
    const winner = calculateWinner(ar);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xturn ? 'X' : 'O');
    }
   
    const mw = ar.map((item, index) => <button className=' border-black border p-7' onClick={() => handleClick(index)} key={index} >{item}{ar[index]}</button>)
  
    return (
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className="status mb-4 text-xl absolute top-5">{status}</div>
        <div className=' w-96 grid grid-rows-3 grid-flow-col gap-4 '>
        {mw}
       
        </div>
        
      </div>
    );

    
  };

  const calculateWinner = (ar) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (ar[a] && ar[a] === ar[b] && ar[a] === ar[c]) {
        return ar[a];
      }
    }
  
    return null;
  };
  
  
  
export default Navbar