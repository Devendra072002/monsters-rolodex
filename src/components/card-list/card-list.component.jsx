// import { Component } from "react";
import './card-list.styles.css'
import Card from "../card/card.component";


const CardList = ({ monsters }) => (

    <div className="card-list" > {
        monsters.map((monster) => {

            return (
                <Card monster={monster} key={monster.id} />
            );
        })
    }
    </div>
);



// class CardList extends Component {

//     render() {
//         // console.log("render from CardList");
//         //Re-rendering because props get changed
//         const { monsters } = this.props;
//         return (
//             <div className="card-list" > {
//                 monsters.map((monster) => {

//                     return (
//                        <Card monster={monster} />
//                     );
//                 })
//             }
//             </div>
//         );
//     }
// }

export default CardList;