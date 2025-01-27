import {FaApple, FaChevronLeft, FaClock, FaEye, FaIdCard, FaIdCardAlt, FaLock} from "react-icons/fa"
import Toggle from "./Toggle";


const Data ={
    cardData:[
     {
         id:1,
         icon: FaLock,
         Switch:Toggle,
         title:'Allow Transaction',
         desc: 'Transactions are allowed',
       },
     {
         id:2,
         icon: FaEye,
         title:'View Your pin',
       },
     {
         id:3,
         icon: FaIdCard,
         title:'Change your pin',
       },
     {
         id:4,
         icon: FaIdCardAlt,
         title:'Replace your card',
         desc: 'Card was lost, stolen, or damaged',
       },
     {
         id:5,
         icon: FaApple,
         title:'Add to apple pay',
       },
     {
         id:6,
         icon: FaClock,
         title:'Repayments',
       },
    ]
 }
 export default Data;