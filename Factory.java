interface Document{
    void getDoc();
}
class WordDoc implements Document{
    public void getDoc(){
        System.out.println("Word Document");
    }
}
class PdfDoc implements Document{
    public void getDoc(){
        System.out.println("PDF Document");
    }
}
class DocFactory{
    public static Document getDoc(String s){
        Document d=null;
        if(s.equals("Word")){
            d=new WordDoc();
        }else if(s.equals("PDF")){
            d=new PdfDoc();
        }
        return d;
    }
}
public class Factory{
    public static void main(String[] args) {
        Document g=DocFactory.getDoc("Word");
        g.getDoc();
    }
}