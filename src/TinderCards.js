import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from './axios'

function TinderCards() {
   const [people, setPeople] = useState([ 
        {
            name: "Elon Musk",
            imgUrl: "https://cdn.pixabay.com/photo/2021/03/09/23/49/elon-6083103_960_720.jpg"
        },
        {
            name: "Poll Davis",
            imgUrl: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            name: "Rose Poll",
            imgUrl: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            name: "Mark Brown",
            imgUrl: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            name: "Brandy Poll",
            imgUrl: "https://cdn.pixabay.com/photo/2018/01/04/14/16/woman-3060784_960_720.jpg"
        },
        {
            name: "Carolina Smith",
            imgUrl: "https://images.pexels.com/photos/5717549/pexels-photo-5717549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
    ]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards")
            setPeople(req.data)
        }
        fetchData();
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={("up", "down")}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.imgUrl})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                )))}

            </div>

        </div>
    )
}
export default TinderCards