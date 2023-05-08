import { useState, Suspense } from 'react';
import { fetchData } from '../fetchData';
import {
    Card,
    MultiSelectBox,
    MultiSelectBoxItem,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';

const sixthQuestionData = fetchData('ie_metod/')

const SixthQuestion = () => {
    const data = sixthQuestionData.read()

    let id = 1;
    for (let i = 0; i < data.length; i++) {
        data[i].id = i + 1;
    }

    let filtersArray = data.filter(
        (obj, index, self) =>
            index ===
            self.findIndex((t) => t.ANNO_INF === obj.ANNO_INF)
    );

    const calculatePercentage = (valor, total) => {
        return (valor / total) * 100
    }

    function calcularTotalIESporANNO_INF(arr) {
        const res = arr.reduce((acc, curr) => {
            const ANNO_INF = curr.ANNO_INF;
            const cantidad = curr.cantidad_mete;
            acc[ANNO_INF] = (acc[ANNO_INF] || 0) + cantidad;
            return acc;
        }, {});

        return Object.entries(res).map(([ANNO_INF, total_ies]) => {
            return { ANNO_INF: Number(ANNO_INF), total_ies };
        });
    }

    const [selectedYears, setSelectedYears] = useState([]);

    const isYearSelected = (year) => (selectedYears.includes(year.ANNO_INF) || selectedYears.length === 0);

    function valueFormatter(number, year) {
        const arrayTotals = calcularTotalIESporANNO_INF(data)
        const totalPerYear = arrayTotals.filter((i) => i.ANNO_INF === year)
        const formattedString =  `${Intl.NumberFormat("us").format(number).toString()} - ${calculatePercentage(number, totalPerYear[0].total_ies).toFixed(2)}%`;
        return formattedString
    }
    return (
        <>
            <div
                className='-z-10 absolute inset-0 max-w-lg m-auto h-[27rem] sm:h-64 sm:max-w-7xl' style={{
                    background: 'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
                    filter: 'blur(118px)'
                }}
            />
            <h2 className='flex items-center pt-10 pb-4 text-2xl font-semibold opacity-60 gap-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z" clipRule="evenodd" />
                </svg>
                Visualizar el numero de metodologias por colegio y  a su vez por cada año(2018-2019)
            </h2>
            <Suspense fallback={<div>Loading...</div>}>

                <Card>
                    <div className="sm:mt-6 hidden sm:flex sm:start sm:space-x-2">
                        <MultiSelectBox
                            onValueChange={(value) => setSelectedYears(value)}
                            placeholder="Año"
                            className="max-w-xs"
                        >
                            {filtersArray.map((item) => (
                                <MultiSelectBoxItem
                                    key={item.id}
                                    value={item.ANNO_INF}
                                    text={item.ANNO_INF.toString()}
                                />
                            ))}
                        </MultiSelectBox>
                    </div>
                    <Table className="mt-6">
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell>Año</TableHeaderCell>
                                <TableHeaderCell>NOMBRE_ESTABLECIMIENTO</TableHeaderCell>
                                <TableHeaderCell>Cant metodologias</TableHeaderCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {data
                                .filter((item) => isYearSelected(item))
                                .map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.ANNO_INF}</TableCell>
                                        <TableCell>{item.NOMBRE_ESTABLECIMIENTO}</TableCell>
                                        <TableCell>{valueFormatter(item.cantidad_mete, item.ANNO_INF)}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </Card>
            </Suspense>
        </>
    )

}

export default SixthQuestion;