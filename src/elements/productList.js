import grd from '../images/record_players/garrard.jpg';
import grd1 from '../images/record_players/garrard1.jpg';
import grd2 from '../images/record_players/garrard2.jpg';
import pns from '../images/record_players/panasonic1.jpg';
import pns1 from '../images/record_players/panasonic2.jpg';
import pns2 from '../images/record_players/panasonic3.png';
import pnr from '../images/record_players/pioneer.jpg';
import pnr1 from '../images/record_players/pioneer1.jpg';
import pnr2 from '../images/record_players/pioneer2.jpg';
import pnr3 from '../images/record_players/pioneer3.jpg';
import dream from '../images/consoles/dreamcast1.jpg'
import dream1 from '../images/consoles/dreamcast2.jpg'
import dream2 from '../images/consoles/dreamcast3.jpg'
import n64 from '../images/consoles/nintendo64_1.jpg'
import n64_1 from '../images/consoles/nintendo64_2.jpg'
import n64_2 from '../images/consoles/nintendo64_3.jpg'
import n64_3 from '../images/consoles/nintendo64_4.jpg'
import n64_4 from '../images/consoles/nintendo64_5.jpg'
import saturn from '../images/consoles/saturn1.jpg'
import saturn1 from '../images/consoles/saturn2.jpg'
import saturn2 from '../images/consoles/saturn3.jpg'
import saturn3 from '../images/consoles/saturn4.jpg'
import saturn4 from '../images/consoles/saturn5.jpg'
import gen from '../images/consoles/megadrive.jpg'
import gen1 from '../images/consoles/megadrive1.jpg'
import gen2 from '../images/consoles/megadrive2.jpg'
import gen3 from '../images/consoles/megadrive3.jpg'
import gen4 from '../images/consoles/megadrive4.jpg'
import nes1 from '../images/consoles/nintendoes1.png'
import nes2 from '../images/consoles/nintendoes2.png'
import nes3 from '../images/consoles/nintendoes3.png'
import nes4 from '../images/consoles/nintendoes4.png'
import nes5 from '../images/consoles/nintendoes5.png'
import sgen from '../images/consoles/genesis.jpg'
import sgen1 from '../images/consoles/genesis1.jpg'
import sgen2 from '../images/consoles/genesis2.jpg'
import sgen3 from '../images/consoles/genesis3.jpg'
import sgen4 from '../images/consoles/genesis4.jpg'

const products = [
    {
        id: 1,
        description: 'Garrard GT-25P',
        price: '300.00',
        availability: 'In Stock',
        image: [
            `${grd}`,
            `${grd1}`,
            `${grd2}`,
        ], 
        category: 'record_player'
    },
    {
        id: 2,
        description: 'SEGA Dreamcast ',
        price: '220.00',
        availability: 'In Stock',
        image: [
            `${dream}`,
            `${dream1}`,
            `${dream2}`,
        ],
        category: 'gaming_console'
    },
    {
        id: 3,
        description: 'Pioneer PL-1250',
        price: '290.00',
        availability: 'In Stock',
        image: [
            `${pnr}`,
            `${pnr1}`,
            `${pnr2}`,
            `${pnr3}`,
        ], 
        category: 'record_player'
    },
    {
        id: 4,
        description: 'Nintendo 64',
        price: '150.00',
        availability: 'In Stock',
        image: [
            `${n64}`,
            `${n64_1}`,
            `${n64_2}`,
            `${n64_3}`,
            `${n64_4}`,
        ], 
        category: 'gaming_console'
    },
    {
        id: 5,
        description: 'SEGA Saturn',
        price: '240.00',
        availability: 'In Stock',
        image: [
            `${saturn}`, 
            `${saturn1}`, 
            `${saturn2}`, 
            `${saturn3}`, 
            `${saturn4}`,
        ],
        category: 'gaming_console'
    },
    {
        id: 6,
        description: 'Panasonic RD-7703 BSR',
        price: '320.00',
        availability: 'In Stock',
        image: [
            `${pns}`,
            `${pns1}`,
            `${pns2}`,
        ], 
        category: 'record_player'
    },
    {
        id: 7,
        description: 'Pioneer PL-1250',
        price: '290.00',
        availability: 'In Stock',
        image: [
            `${pnr}`,
            `${pnr1}`,
            `${pnr2}`,
            `${pnr3}`,
        ], 
        category: 'record_player'
    },
    {
        id: 8,
        description: 'Panasonic RD-7703 BSR',
        price: '320.00',
        availability: 'In Stock',
        image: [
            `${pns}`,
            `${pns1}`,
            `${pns2}`,
        ], 
        category: 'record_player'
    },
    {
        id: 9,
        description: 'Garrard GT-25P',
        price: '300.00',
        availability: 'In Stock',
        image: [
            `${grd}`,
            `${grd1}`,
            `${grd2}`,
        ], 
        category: 'record_player'
    },
    {
        id: 10,
        description: 'SEGA Genesis',
        price: '90.00',
        availability: 'In Stock',
        image: [
            `${gen}`,
            `${gen1}`,
            `${gen2}`,
            `${gen3}`,
            `${gen4}`,
        ], 
        category: 'gaming_console'
    },
    {
        id: 11,
        description: 'Nintendo ES',
        price: '89.00',
        availability: 'In Stock',
        image: [
            `${nes1}`,
            `${nes2}`,
            `${nes3}`,
            `${nes4}`,
            `${nes5}`,
        ], 
        category: 'gaming_console'
    },
    {
        id: 11,
        description: 'SEGA Genesis Gen 2',
        price: '60.00',
        availability: 'In Stock',
        image: [
            `${sgen}`,
            `${sgen1}`,
            `${sgen2}`,
            `${sgen3}`,
            `${sgen4}`,
        ], 
        category: 'gaming_console'
    },
];

export default products;