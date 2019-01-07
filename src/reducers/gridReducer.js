import { ADDUSER, GRIDINFO, EDITUSER, DELETEUSER } from '../actions'

const INIT_STATE = {
    gridColumncolumnMap: [
        { order: 1, Name: '', type: 'checkbox', cansort: false },
        { order: 2, Name: 'Name', type: 'textBox', cansort: true },
        { order: 3, Name: 'Order Date', type: 'date', cansort: true },
        { order: 4, Name: 'Unit', type: 'textBox', cansort: true },
        { order: 5, Name: 'Discount', type: 'checkbox', cansort: false },
        { order: 6, Name: 'In Stock', type: 'combo', cansort: false },
        { order: 7, Name: '  ', type: '', cansort: false },

    ],
    pagingSize: [{ num: 10 }, { num: 25 }, { num: 50 }],
    canUserSort: true,
    canPaggingApply: true,
    canUserSearchData: true,
    theme: false,
    gridInfo: [{
            "id": 1,
            "name_val": "Product1",
            "order_date": "01/02/2019",
            "unit": 20,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 2,
            "name_val": "Product2",
            "order_date": "01/01/2019",
            "unit": 14,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 3,
            "name_val": "Product3",
            "order_date": "01/03/2019",
            "unit": 6,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 4,
            "name_val": "Product4",
            "order_date": "02/04/2019",
            "unit": 8,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 5,
            "name_val": "Product5",
            "order_date": "03/01/2019",
            "unit": 17,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 6,
            "name_val": "Product6",
            "order_date": "04/01/2019",
            "unit": 10,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 7,
            "name_val": "Product7",
            "order_date": "05/01/2019",
            "unit": 19,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 8,
            "name_val": "Product8",
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 9,
            "name_val": "Product9",
            "order_date": "01/01/2019",
            "unit": 9,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 10,
            "name_val": "Product10",
            "order_date": "01/01/2019",
            "unit": 8,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 11,
            "name_val": "Product11",
            "order_date": "01/01/2019",
            "unit": 17,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 12,
            "name_val": "Product12",
            "order_date": "01/01/2019",
            "unit": 11,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 13,
            "name_val": "Product13",
            "order_date": "01/01/2019",
            "unit": 6,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 14,
            "name_val": "Product14",
            "order_date": "01/01/2019",
            "unit": 18,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 15,
            "name_val": "Product15",
            "order_date": "01/01/2019",
            "unit": 12,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 16,
            "name_val": "Product16",
            "order_date": "01/01/2019",
            "unit": 10,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 17,
            "name_val": "Product17",
            "order_date": "01/01/2019",
            "unit": 19,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 18,
            "name_val": "Product18",
            "order_date": "01/01/2019",
            "unit": 17,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 19,
            "name_val": "Product19",
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 20,
            "name_val": "Product20",
            "order_date": "01/01/2019",
            "unit": 20,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 21,
            "name_val": "Product21",
            "order_date": "01/01/2019",
            "unit": 18,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 22,
            "name_val": "Product22",
            "order_date": "01/01/2019",
            "unit": 5,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 23,
            "name_val": "Product23",
            "order_date": "01/01/2019",
            "unit": 8,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 24,
            "name_val": "Product24",
            "order_date": "01/01/2019",
            "unit": 20,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 25,
            "name_val": "Product25",
            "order_date": "01/01/2019",
            "unit": 7,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 26,
            "name_val": "Product26",
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 27,
            "name_val": "Product27",
            "order_date": "01/01/2019",
            "unit": 8,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 28,
            "name_val": "Product28",
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 29,
            "name_val": "Product29",
            "order_date": "01/01/2019",
            "unit": 16,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 30,
            "name_val": "Product30",
            "order_date": "01/01/2019",
            "unit": 16,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 31,
            "name_val": "Product31",
            "order_date": "01/01/2019",
            "unit": 18,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 32,
            "name_val": "Product32",
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 33,
            "name_val": "Product33",
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 34,
            "name_val": "Product34",
            "order_date": "01/01/2019",
            "unit": 14,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 35,
            "name_val": "Product35",
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 36,
            "name_val": "Product36",
            "order_date": "01/01/2019",
            "unit": 6,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 37,
            "name_val": "Product37",
            "order_date": "01/01/2019",
            "unit": 9,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 38,
            "name_val": "Product38",
            "order_date": "01/01/2019",
            "unit": 11,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 39,
            "name_val": "Product39",
            "order_date": "01/01/2019",
            "unit": 19,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 40,
            "name_val": "Product40",
            "order_date": "01/01/2019",
            "unit": 9,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 41,
            "name_val": "Product41",
            "order_date": "01/01/2019",
            "unit": 12,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 42,
            "name_val": "Product42",
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 43,
            "name_val": "Product43",
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 44,
            "name_val": "Product44",
            "order_date": "01/01/2019",
            "unit": 5,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 45,
            "name_val": "Product45",
            "order_date": "01/01/2019",
            "unit": 5,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 46,
            "name_val": "Product46",
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 47,
            "name_val": "Product47",
            "order_date": "01/01/2019",
            "unit": 17,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 48,
            "name_val": "Product48",
            "order_date": "01/01/2019",
            "unit": 5,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 49,
            "name_val": "Product49",
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 50,
            "name_val": "Product50",
            "order_date": "01/01/2019",
            "unit": 8,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 51,
            "name_val": "Product51",
            "order_date": "01/01/2019",
            "unit": 12,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 52,
            "name_val": "Product52",
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 53,
            "name_val": "Product53",
            "order_date": "01/01/2019",
            "unit": 12,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 54,
            "name_val": "Product54",
            "order_date": "01/01/2019",
            "unit": 17,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 55,
            "name_val": "Product55",
            "order_date": "01/01/2019",
            "unit": 5,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 56,
            "name_val": "Product56",
            "order_date": "01/01/2019",
            "unit": 20,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 57,
            "name_val": "Product57",
            "order_date": "01/01/2019",
            "unit": 17,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 58,
            "name_val": "Product58",
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 59,
            "name_val": "Product59",
            "order_date": "01/01/2019",
            "unit": 11,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 60,
            "name_val": "Product60",
            "order_date": "01/01/2019",
            "unit": 12,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 61,
            "name_val": "Product61",
            "order_date": "01/01/2019",
            "unit": 14,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 62,
            "name_val": "Product62",
            "order_date": "01/01/2019",
            "unit": 16,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 63,
            "name_val": "Product63",
            "order_date": "01/01/2019",
            "unit": 19,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 64,
            "name_val": "Product64",
            "order_date": "01/01/2019",
            "unit": 10,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 65,
            "name_val": "Product65",
            "order_date": "01/01/2019",
            "unit": 9,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 66,
            "name_val": "Product66",
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 67,
            "name_val": "Product67",
            "order_date": "01/01/2019",
            "unit": 5,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 68,
            "name_val": "Product68",
            "order_date": "01/01/2019",
            "unit": 18,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 69,
            "name_val": "Product69",
            "order_date": "01/01/2019",
            "unit": 19,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 70,
            "name_val": "Product70",
            "order_date": "01/01/2019",
            "unit": 12,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 71,
            "name_val": "Product71",
            "order_date": "01/01/2019",
            "unit": 14,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 72,
            "name_val": "Product72",
            "order_date": "01/01/2019",
            "unit": 19,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 73,
            "name_val": "Product73",
            "order_date": "01/01/2019",
            "unit": 5,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 74,
            "name_val": "Product74",
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 75,
            "name_val": "Product75",
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 76,
            "name_val": "Product76",
            "order_date": "01/01/2019",
            "unit": 9,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 77,
            "name_val": "Product77",
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 78,
            "name_val": "Product78",
            "order_date": "01/01/2019",
            "unit": 11,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 79,
            "name_val": "Product79",
            "order_date": "01/01/2019",
            "unit": 11,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 80,
            "name_val": "Product80",
            "order_date": "01/01/2019",
            "unit": 19,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 81,
            "name_val": "Product81",
            "order_date": "01/01/2019",
            "unit": 5,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 82,
            "name_val": "Product82",
            "order_date": "01/01/2019",
            "unit": 14,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 83,
            "name_val": "Product83",
            "order_date": "01/01/2019",
            "unit": 11,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 84,
            "name_val": "Product84",
            "order_date": "01/01/2019",
            "unit": 18,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 85,
            "name_val": "Product85",
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 86,
            "name_val": "Product86",
            "order_date": "01/01/2019",
            "unit": 19,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 87,
            "name_val": "Product87",
            "order_date": "01/01/2019",
            "unit": 7,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 88,
            "name_val": "Product88",
            "order_date": "01/01/2019",
            "unit": 18,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 89,
            "name_val": "Product89",
            "order_date": "01/01/2019",
            "unit": 18,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 90,
            "name_val": "Product90",
            "order_date": "01/01/2019",
            "unit": 9,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 91,
            "name_val": "Product91",
            "order_date": "01/01/2019",
            "unit": 12,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 92,
            "name_val": "Product92",
            "order_date": "01/01/2019",
            "unit": 17,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 93,
            "name_val": "Product93",
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 94,
            "name_val": "Product94",
            "order_date": "01/01/2019",
            "unit": 14,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 95,
            "name_val": "Product95",
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 96,
            "name_val": "Product96",
            "order_date": "01/01/2019",
            "unit": 9,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 97,
            "name_val": "Product97",
            "order_date": "01/01/2019",
            "unit": 9,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 98,
            "name_val": "Product98",
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 99,
            "name_val": "Product99",
            "order_date": "01/01/2019",
            "unit": 8,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 100,
            "name_val": "Product100",
            "order_date": "01/01/2019",
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