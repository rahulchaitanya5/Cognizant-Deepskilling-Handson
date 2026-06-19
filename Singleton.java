class Principal{
    private static Principal p;
    private Principal(){

    }
    public static Principal getInstance(){
        if(p==null){
            p=new Principal();
        }
        return p;
    }
    public void announceHoliday(){
        System.out.println("Holiday announced");
    }
    public void approveLeave(){
        System.out.println("Leave approved");
    }
}
public class Singleton{
    public static void main(String[] args) {
        Principal k=Principal.getInstance();
        Principal j=Principal.getInstance();
        System.out.println(k==j);
        k.announceHoliday();
        j.approveLeave();
    }
}