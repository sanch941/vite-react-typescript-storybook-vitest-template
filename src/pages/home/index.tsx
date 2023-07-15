import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { useEffect } from 'react';
import { homeActions } from './model';

export const HomePage = () => {
    const show = useAppSelector(({ home }) => home.show);
    const dispatch = useAppDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(homeActions.setShow(true));
        }, 2000);
    });

    return (
        <>
            <div className="text-red-500">example</div>
            {show && <div> async text... </div>}
        </>
    );
};
