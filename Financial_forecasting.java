import java.util.*;
class Forecast{
    public double calculate(double value,double rate,int years){
        if(years==0){
            return value;
        }
        value=value*rate/100+value;
        return calculate(value, rate, years-1);
    }
}
class Financial_forecasting{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter Principle value:");
        double value=sc.nextDouble();
        System.out.println("Enter rate of Interest:");
        double rate=sc.nextDouble();
        System.out.println("Enter tenure");
        int years=sc.nextInt();
        Forecast f=new Forecast();
        double d=f.calculate(value, rate, years);
        System.out.println("Total amount:"+d);
        sc.close();
    }
}