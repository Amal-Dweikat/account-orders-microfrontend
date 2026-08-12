import {

    currentUser,

    statistics,

    recentOrders,

    recentActivities

} from './mock-data';

export class DashboardService{

    static getUser(){

        return currentUser;

    }

    static getStatistics(){

        return statistics;

    }

    static getRecentOrders(){

        return recentOrders;

    }

    static getRecentActivities(){

        return recentActivities;

    }

}