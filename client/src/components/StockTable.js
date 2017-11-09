import React, {Component} from 'react';
import { DetailsList, IColumn, IDocument } from 'office-ui-fabric-react/lib/DetailsList';

export default class StockTable extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        /* Letting the column setup here because it's the only place where it makes the data actually be updated in the rows */
        let _columns: IColumn[] = [
            {
                key: 'column1',
                name: 'Movimentação',
                fieldName: 'action',
                maxWidth: 100,
                onRender: (item: IDocument) => {
                    return(
                        <span>
                            { item.action ? 'Compra' : 'Venda' }
                        </span>
                    )
                }
            },
            {
                key: 'column2',
                name: 'Ação',
                fieldName: 'stock',
                isRowHeader: true
            },
            {
                key: 'column3',
                name: 'Quantidade',
                fieldName: 'total'
            },
            {
                key: 'column4',
                name: 'Preço unitário',
                fieldName: 'price'
            },
            {
                key: 'column5',
                name: 'Data',
                fieldName: 'date'
            }
        ]

        return(
            <DetailsList columns={ _columns } items={ this.props.data }/>
        )
    }
}
