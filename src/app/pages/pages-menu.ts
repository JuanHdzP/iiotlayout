import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Visualización',
    icon: 'eye-outline',
    link: '/pages/visualizacion',
    home: true,
  },
  {
    title: 'Alarmas',
    icon: 'bell-outline',
    link: '/pages/alarmas',
  },
  {
    title: 'Estadísticas',
    icon: 'bar-chart-outline',
    link: '/pages/estadisticas',
  },
  {
    title: 'Calendario',
    icon: 'calendar-outline',
    link: '/pages/calendario',
  },
  {
    title: 'OEE',
    icon: 'pie-chart-outline',
    link: '/pages/oee',
  },
  {
    title: 'ANDON',
    icon: 'bulb-outline',
    link: '/pages/andon',
  },
  {
    title: 'Exportar Datos',
    icon: 'upload-outline',
    link: '/pages/exportar',
  },
  {
    title: 'Configuración',
    icon: 'settings-2-outline',
    link: '/pages/configuracion',
  },
];
