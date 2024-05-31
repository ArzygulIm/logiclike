import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../components/Sidebar/Sidebar';
import Card from '../../components/Card/Card';

interface Course {
    id: string;
    name: string;
    image: string;
    bgColor: string;
    tags: string[];
}

const Tags: React.FC = () => {
    const [data, setData] = useState<Course[]>([]);
    const { tags } = useParams<{ tags: string }>();

    const fetchData = useCallback(async () => {
        if (!tags) return;
        
        try {
            const response = await axios.get<Course[]>('https://logiclike.com/docs/courses.json');
            const filteredData = response.data.filter(el =>
                el.tags.includes(tags.replace(/_/g, ' ')) ||
                (tags === 'Путешествия' && el.tags.includes('Страны и столицы'))
            );
            setData(filteredData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [tags]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <section id="tags">
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

export default Tags;