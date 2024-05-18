import { useRouter } from 'next/router';

import { Button } from '@/views/ui/Button';
import { Title } from '@/views/ui/Title';

import cls from './index.module.scss'


const Page404 = () => {
    const { back } = useRouter();

    const page404 = (
            <div className="container">
                <div className={cls.notFoundInner}>
                    <Title type='h1' className={cls.title}>404</Title>
                    <Title className={cls.subtitle}>Страница не найдена</Title>
                    <p className={cls.disc}>Страница не найдена</p>
                    <Button mode='outline' onClick={() => back()}>
                        Назад
                    </Button>
                </div>
            </div>
    );

    return page404;
};

export default Page404;