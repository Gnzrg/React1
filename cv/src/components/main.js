import Button from"./buttons"
const Tech = ({techs}) => {
return(
    <ul>
        {techs.map((e)=>(
        <li>{e}</li>))}
    </ul>
)
}
const UserCard = ({img, firstName , lastName}) =>{
    return(
        <div>
            <img src={img} alt="user"/>
            <h4>{firstName} {lastName}</h4>
        </div>
    )
}



export default function Main({user , techs, greetPeople, showDate}){

const userInfo = {...user,
     img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZSuEbMHQPk966GRtM--7SQCQ5XeckBCFyl6xSoMoQw&s"
    };
const users = [
    {img:"https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" , firstName:"Bold" , lastName:"Dula" },
    {img:"https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg" , firstName:"Gan" , lastName:"Bat" },
    {img:"https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" , firstName:"Dorj" , lastName:"Huyg" },
    {img:"https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg" , firstName:"Khuslen" , lastName:"Naraa" },
    
]

    return(
        <div>
            <div >
                <h4>Tech Stack</h4>
                <Tech techs={techs}/>
                <UserCard {...userInfo}/>

                
                { users.map((userInfo)=>{
return(
    <UserCard {...userInfo}/>
)
                    }) }
                <Button text="Greet People" status={true} func= {greetPeople}/>
                <Button text="Show Date" status={false} func= {showDate}/>
            </div>
        </div>
    )
}
