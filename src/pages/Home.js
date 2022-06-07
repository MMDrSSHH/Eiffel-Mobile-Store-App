import React from 'react';

// Components
import Slider from '../Components/Slider';
import ShopShowCase from '../Components/ShopShowCase';
import Services from '../Components/Services';

// Images and icons
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';



const Home = () => {
    return (
        <div>
            <Slider />
            <ShopShowCase />
            <Services servicesData={servicesData} />
        </div>
    );
}


const servicesData = [
    {
        id: 1,
        title: "تعمیرات تخصصی",
        icon: <HandymanOutlinedIcon sx={{fontSize: 35}} />,
        description: "با تخصصی که ما توی تعمیرات داریم گوشیت دیگه مریض نمی‌مونه. پس نگرانی رو بزار کنار و گوشیتو به ما بسپار"
    },
    {
        id: 2,
        title: "تحویل سریع",
        icon: <AccessTimeOutlinedIcon sx={{ fontSize: 35 }} />,
        description: "خوشبختانه بخاطر تجریه‌ای که طی سال‌ها تعمیرات تلفن همراه شما عزیزان کسب کردیم، با اطمینان میتونیم بگیم که موبایل شما در سریعترین زمان ممکن تعمیر خواهد شد."
    },
    {
        id: 3,
        title: "تنوع در محصولات",
        icon: <CategoryOutlinedIcon sx={{ fontSize: 35 }} />,
        description: "ما توی بخش فروش تلاش بر این داریم که تنوع زیادی داشته باشیم تا شما عزیزان بتونید اونچه رو که بدنبالشین به راحتی پیدا کنین و با قیمت مناسب تهیه کنید."
    }
]

export default Home;