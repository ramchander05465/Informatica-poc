import { ADDUSER, GRIDINFO, EDITUSER, DELETEUSER } from '../actions'

const INIT_STATE = {
    gridColumncolumnMap: [
        { order: 1, Name: '', type: 'checkbox', cansort: false },
        { order: 2, Name: 'Name', type: 'textBox', cansort: true },
        { order: 3, Name: 'Order Date', type: 'date', cansort: false },
        { order: 4, Name: 'Unit', type: 'textBox', cansort: true },
        { order: 5, Name: 'Discount', type: 'checkbox', cansort: false },
        { order: 6, Name: 'In Stock', type: 'textBox', cansort: false },
        { order: 7, Name: '  ', type: '', cansort: false },

    ],
    pagingSize: [{ num: 10 }, { num: 25 }, { num: 50 }],
    canUserSort: true,
    canPaggingApply: true,
    canUserSearchData: true,
    gridInfo: [{
            "id": 1,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 20,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 2,
            "name_val": 2,
            "order_date": "01/01/2019",
            "unit": 14,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 3,
            "name_val": 5,
            "order_date": "01/01/2019",
            "unit": 6,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 4,
            "name_val": 3,
            "order_date": "02/01/2019",
            "unit": 8,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 5,
            "name_val": 3,
            "order_date": "03/01/2019",
            "unit": 17,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 6,
            "name_val": 2,
            "order_date": "04/01/2019",
            "unit": 10,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 7,
            "name_val": 4,
            "order_date": "05/01/2019",
            "unit": 19,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 8,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 9,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 9,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 10,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 8,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 11,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 17,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 12,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 11,
            "discount": "0",
            "in_stock": "n2o"
        },
        {
            "id": 13,
            "name_val": 5,
            "order_date": "01/01/2019",
            "unit": 6,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 14,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 18,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 15,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 12,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 16,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 10,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 17,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 19,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 18,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 17,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 19,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 20,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 20,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 21,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 18,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 22,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 5,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 23,
            "name_val": 2,
            "order_date": "01/01/2019",
            "unit": 8,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 24,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 20,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 25,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 7,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 26,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 27,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 8,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 28,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 29,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 16,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 30,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 16,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 31,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 18,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 32,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 33,
            "name_val": 2,
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 34,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 14,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 35,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 36,
            "name_val": 5,
            "order_date": "01/01/2019",
            "unit": 6,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 37,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 9,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 38,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 11,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 39,
            "name_val": 2,
            "order_date": "01/01/2019",
            "unit": 19,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 40,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 9,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 41,
            "name_val": 2,
            "order_date": "01/01/2019",
            "unit": 12,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 42,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 43,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 44,
            "name_val": 2,
            "order_date": "01/01/2019",
            "unit": 5,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 45,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 5,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 46,
            "name_val": 5,
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 47,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 17,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 48,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 5,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 49,
            "name_val": 2,
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 50,
            "name_val": 5,
            "order_date": "01/01/2019",
            "unit": 8,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 51,
            "name_val": 2,
            "order_date": "01/01/2019",
            "unit": 12,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 52,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 53,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 12,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 54,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 17,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 55,
            "name_val": 5,
            "order_date": "01/01/2019",
            "unit": 5,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 56,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 20,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 57,
            "name_val": 5,
            "order_date": "01/01/2019",
            "unit": 17,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 58,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 59,
            "name_val": 2,
            "order_date": "01/01/2019",
            "unit": 11,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 60,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 12,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 61,
            "name_val": 2,
            "order_date": "01/01/2019",
            "unit": 14,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 62,
            "name_val": 2,
            "order_date": "01/01/2019",
            "unit": 16,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 63,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 19,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 64,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 10,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 65,
            "name_val": 2,
            "order_date": "01/01/2019",
            "unit": 9,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 66,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 67,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 5,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 68,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 18,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 69,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 19,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 70,
            "name_val": 5,
            "order_date": "01/01/2019",
            "unit": 12,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 71,
            "name_val": 5,
            "order_date": "01/01/2019",
            "unit": 14,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 72,
            "name_val": 5,
            "order_date": "01/01/2019",
            "unit": 19,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 73,
            "name_val": 5,
            "order_date": "01/01/2019",
            "unit": 5,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 74,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 75,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 76,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 9,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 77,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 15,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 78,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 11,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 79,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 11,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 80,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 19,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 81,
            "name_val": 5,
            "order_date": "01/01/2019",
            "unit": 5,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 82,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 14,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 83,
            "name_val": 2,
            "order_date": "01/01/2019",
            "unit": 11,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 84,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 18,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 85,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 86,
            "name_val": 5,
            "order_date": "01/01/2019",
            "unit": 19,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 87,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 7,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 88,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 18,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 89,
            "name_val": 2,
            "order_date": "01/01/2019",
            "unit": 18,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 90,
            "name_val": 3,
            "order_date": "01/01/2019",
            "unit": 9,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 91,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 12,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 92,
            "name_val": 2,
            "order_date": "01/01/2019",
            "unit": 17,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 93,
            "name_val": 2,
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 94,
            "name_val": 5,
            "order_date": "01/01/2019",
            "unit": 14,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 95,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 96,
            "name_val": 1,
            "order_date": "01/01/2019",
            "unit": 9,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 97,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 9,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 98,
            "name_val": 2,
            "order_date": "01/01/2019",
            "unit": 13,
            "discount": "1",
            "in_stock": "yes"
        },
        {
            "id": 99,
            "name_val": 4,
            "order_date": "01/01/2019",
            "unit": 8,
            "discount": "0",
            "in_stock": "no"
        },
        {
            "id": 100,
            "name_val": 2,
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