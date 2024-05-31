import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './Main.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Card from '../../components/Card/Card';

interface Course {
    id: string;
    name: string;
    image: string;
    bgColor: string;
    tags: string[];
}

const Main: React.FC = () => {
    const [data, setData] = useState<Course[]>([]);

    const getData = useCallback(() => {
        axios.get<Course[]>('https://logiclike.com/docs/courses.json')
            .then(res => {
                setData(res.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <section id="main">
            <div className="container">
                <div className="main__wrap">
                    <Sidebar />
                    <div className="row">
                        {data?.map(el => (
                            <div className="col-4" key={el.id}>
                                <Card item={el} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Main);