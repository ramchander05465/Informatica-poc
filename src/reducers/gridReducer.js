import { ADDUSER, GRIDINFO, EDITUSER, DELETEUSER } from '../actions'

const INIT_STATE = {
    gridColumncolumnMap: [
        { order: 1, Name: 'Name', type: 'textBox' },
        { order: 2, Name: 'Order Date', type: 'date' },
        { order: 3, Name: 'Unit', type: 'textBox' },
        { order: 4, Name: 'Discount', type: 'checkbox' },
        { order: 5, Name: 'In Stock', type: 'textBox' },
        { order: 6, Name: '', type: '' },

    ],
    pagingSize: ["10", "20", "50"],
    canUserSort: true,
    canPaggingApply : true,
    canUserSearchData : true,
    gridInfo: [{
            "id": 1,
            "name_val": 3,
            "order_date": "1517489967",
            "unit": 20,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 2,
            "name_val": 2,
            "order_date": "1557759408",
            "unit": 14,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 3,
            "name_val": 5,
            "order_date": "1566011847",
            "unit": 6,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 4,
            "name_val": 3,
            "order_date": "1545955356",
            "unit": 8,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 5,
            "name_val": 3,
            "order_date": "1561724162",
            "unit": 17,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 6,
            "name_val": 2,
            "order_date": "1515635427",
            "unit": 10,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 7,
            "name_val": 4,
            "order_date": "1522167682",
            "unit": 19,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 8,
            "name_val": 4,
            "order_date": "1539746877",
            "unit": 13,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 9,
            "name_val": 1,
            "order_date": "1576108311",
            "unit": 9,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 10,
            "name_val": 3,
            "order_date": "1570692920",
            "unit": 8,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 11,
            "name_val": 4,
            "order_date": "1544136522",
            "unit": 17,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 12,
            "name_val": 4,
            "order_date": "1573636667",
            "unit": 11,
            "discount": "0",
            "in_stock": "n2o"
        },
        {
            "id": 13,
            "name_val": 5,
            "order_date": "1569351222",
            "unit": 6,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 14,
            "name_val": 1,
            "order_date": "1542531013",
            "unit": 18,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 15,
            "name_val": 1,
            "order_date": "1555946018",
            "unit": 12,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 16,
            "name_val": 4,
            "order_date": "1552762971",
            "unit": 10,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 17,
            "name_val": 3,
            "order_date": "1553792605",
            "unit": 19,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 18,
            "name_val": 4,
            "order_date": "1573934565",
            "unit": 17,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 19,
            "name_val": 1,
            "order_date": "1572962944",
            "unit": 13,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 20,
            "name_val": 1,
            "order_date": "1528826274",
            "unit": 20,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 21,
            "name_val": 4,
            "order_date": "1573478102",
            "unit": 18,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 22,
            "name_val": 1,
            "order_date": "1563129096",
            "unit": 5,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 23,
            "name_val": 2,
            "order_date": "1541655127",
            "unit": 8,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 24,
            "name_val": 1,
            "order_date": "1553389738",
            "unit": 20,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 25,
            "name_val": 1,
            "order_date": "1544331483",
            "unit": 7,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 26,
            "name_val": 4,
            "order_date": "1523683966",
            "unit": 13,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 27,
            "name_val": 4,
            "order_date": "1551086155",
            "unit": 8,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 28,
            "name_val": 3,
            "order_date": "1565881093",
            "unit": 15,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 29,
            "name_val": 1,
            "order_date": "1569746127",
            "unit": 16,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 30,
            "name_val": 3,
            "order_date": "1526715308",
            "unit": 16,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 31,
            "name_val": 3,
            "order_date": "1556917633",
            "unit": 18,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 32,
            "name_val": 4,
            "order_date": "1519934542",
            "unit": 13,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 33,
            "name_val": 2,
            "order_date": "1573758080",
            "unit": 13,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 34,
            "name_val": 3,
            "order_date": "1547086720",
            "unit": 14,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 35,
            "name_val": 3,
            "order_date": "1514052364",
            "unit": 15,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 36,
            "name_val": 5,
            "order_date": "1538348085",
            "unit": 6,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 37,
            "name_val": 3,
            "order_date": "1573157324",
            "unit": 9,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 38,
            "name_val": 3,
            "order_date": "1560055435",
            "unit": 11,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 39,
            "name_val": 2,
            "order_date": "1560719982",
            "unit": 19,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 40,
            "name_val": 3,
            "order_date": "1566800732",
            "unit": 9,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 41,
            "name_val": 2,
            "order_date": "1565955529",
            "unit": 12,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 42,
            "name_val": 1,
            "order_date": "1531917049",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 43,
            "name_val": 3,
            "order_date": "1518483101",
            "unit": 15,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 44,
            "name_val": 2,
            "order_date": "1530815080",
            "unit": 5,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 45,
            "name_val": 1,
            "order_date": "1543044261",
            "unit": 5,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 46,
            "name_val": 5,
            "order_date": "1540887526",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 47,
            "name_val": 3,
            "order_date": "1538819414",
            "unit": 17,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 48,
            "name_val": 3,
            "order_date": "1570892339",
            "unit": 5,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 49,
            "name_val": 2,
            "order_date": "1527070258",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 50,
            "name_val": 5,
            "order_date": "1536421456",
            "unit": 8,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 51,
            "name_val": 2,
            "order_date": "1520674275",
            "unit": 12,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 52,
            "name_val": 4,
            "order_date": "1555904753",
            "unit": 15,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 53,
            "name_val": 1,
            "order_date": "1539237375",
            "unit": 12,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 54,
            "name_val": 1,
            "order_date": "1559012497",
            "unit": 17,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 55,
            "name_val": 5,
            "order_date": "1562884349",
            "unit": 5,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 56,
            "name_val": 3,
            "order_date": "1515053104",
            "unit": 20,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 57,
            "name_val": 5,
            "order_date": "1556994834",
            "unit": 17,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 58,
            "name_val": 1,
            "order_date": "1546570079",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 59,
            "name_val": 2,
            "order_date": "1545615780",
            "unit": 11,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 60,
            "name_val": 3,
            "order_date": "1571565089",
            "unit": 12,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 61,
            "name_val": 2,
            "order_date": "1575910050",
            "unit": 14,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 62,
            "name_val": 2,
            "order_date": "1521169001",
            "unit": 16,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 63,
            "name_val": 3,
            "order_date": "1530986730",
            "unit": 19,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 64,
            "name_val": 4,
            "order_date": "1523430375",
            "unit": 10,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 65,
            "name_val": 2,
            "order_date": "1573904217",
            "unit": 9,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 66,
            "name_val": 1,
            "order_date": "1543569531",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 67,
            "name_val": 3,
            "order_date": "1518323444",
            "unit": 5,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 68,
            "name_val": 1,
            "order_date": "1555605212",
            "unit": 18,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 69,
            "name_val": 1,
            "order_date": "1567758894",
            "unit": 19,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 70,
            "name_val": 5,
            "order_date": "1557901449",
            "unit": 12,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 71,
            "name_val": 5,
            "order_date": "1548360924",
            "unit": 14,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 72,
            "name_val": 5,
            "order_date": "1533300414",
            "unit": 19,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 73,
            "name_val": 5,
            "order_date": "1567539307",
            "unit": 5,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 74,
            "name_val": 4,
            "order_date": "1571795113",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 75,
            "name_val": 4,
            "order_date": "1522306828",
            "unit": 15,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 76,
            "name_val": 4,
            "order_date": "1551698426",
            "unit": 9,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 77,
            "name_val": 4,
            "order_date": "1545050009",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 78,
            "name_val": 4,
            "order_date": "1522655754",
            "unit": 11,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 79,
            "name_val": 1,
            "order_date": "1515916014",
            "unit": 11,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 80,
            "name_val": 4,
            "order_date": "1564128526",
            "unit": 19,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 81,
            "name_val": 5,
            "order_date": "1536053942",
            "unit": 5,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 82,
            "name_val": 4,
            "order_date": "1521441091",
            "unit": 14,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 83,
            "name_val": 2,
            "order_date": "1518240185",
            "unit": 11,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 84,
            "name_val": 4,
            "order_date": "1524184491",
            "unit": 18,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 85,
            "name_val": 3,
            "order_date": "1515449655",
            "unit": 13,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 86,
            "name_val": 5,
            "order_date": "1571816664",
            "unit": 19,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 87,
            "name_val": 3,
            "order_date": "1535890520",
            "unit": 7,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 88,
            "name_val": 1,
            "order_date": "1563085910",
            "unit": 18,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 89,
            "name_val": 2,
            "order_date": "1543607227",
            "unit": 18,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 90,
            "name_val": 3,
            "order_date": "1516442762",
            "unit": 9,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 91,
            "name_val": 1,
            "order_date": "1537149083",
            "unit": 12,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 92,
            "name_val": 2,
            "order_date": "1569960278",
            "unit": 17,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 93,
            "name_val": 2,
            "order_date": "1519394519",
            "unit": 13,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 94,
            "name_val": 5,
            "order_date": "1539980216",
            "unit": 14,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 95,
            "name_val": 1,
            "order_date": "1576696552",
            "unit": 13,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 96,
            "name_val": 1,
            "order_date": "1530823423",
            "unit": 9,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 97,
            "name_val": 4,
            "order_date": "1573942687",
            "unit": 9,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 98,
            "name_val": 2,
            "order_date": "1520038298",
            "unit": 13,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 99,
            "name_val": 4,
            "order_date": "1535717676",
            "unit": 8,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 100,
            "name_val": 2,
            "order_date": "1545001098",
            "unit": 11,
            "discount": "0",
            "in_stock": "no"
        }
    ]
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GRIDINFO:
            return {
                ...state,
                gridInfo: action.gridInfo
            }
        case ADDUSER:
            return {
                ...state,
                gridInfo: [...state.gridInfo, action.info]
            }
        case EDITUSER:
            const index = state.gridInfo.findIndex((user) => user.id === action.info.id);
            state.gridInfo[index] = action.info;
            return {
                ...state,
                gridInfo: [...state.gridInfo]
            }
        case DELETEUSER:
            return {
                ...state,
                gridInfo: state.gridInfo.filter((user) => user.id !== action.info.id)
            }
        default:
            return state
    }
}

export default reducer