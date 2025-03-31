import Spline from '@splinetool/react-spline';

const SplineAnimation = () => {
    return (
        <div className="absolute inset-0 w-full h-full">
            <Spline scene="/void.spline" />
        </div>
    );
};

export default SplineAnimation;
