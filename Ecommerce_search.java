import java.util.*;
class Product{
    int prod_id;
    String prod_name,category;
    Product(int prod_id,String prod_name,String category){
        this.prod_id=prod_id;
        this.prod_name=prod_name;
        this.category=category;
    }
}
class LinearSearch{
    public void search(Product[] products,String product_name){
        for(Product p:products){
            if(p.prod_name.equals(product_name)){
                System.out.println(p.prod_id+" "+p.prod_name+" "+p.category);
                return;
            }
        }
        System.out.println("Product not found");
    }
}
class BinarySearch{
    public void search(Product[] products,int product_id){
        Arrays.sort(products,(p1,p2)->Integer.compare(p1.prod_id, p2.prod_id));
        int high=products.length-1;
        int low=0;
        while(low<=high){
            int mid=(low+high)/2;
            if(products[mid].prod_id==product_id){
                System.out.println(products[mid].prod_id+" "+products[mid].prod_name+" "+products[mid].category);
                return;
            }else if(products[mid].prod_id>product_id){
                high=mid-1;
            }else if(products[mid].prod_id<product_id){
                low=mid+1;
            }
        }
        System.out.println("Product not found");
    }
}
public class Ecommerce_search{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        Product[] products=new Product[n];
        System.out.println("Enter product details:");
        for(int i=0;i<n;i++){
            int prod_id=sc.nextInt();
            sc.nextLine();
            String prod_name=sc.nextLine();
            String category=sc.nextLine();
            products[i]=new Product(prod_id, prod_name, category);

        }
        System.out.print("Enter to search through Name(N)/ID(I)");
        String search=sc.nextLine();
        switch (search) {
            case "N":
                System.out.print("Enter name to search:");
                String product_name=sc.nextLine();
                LinearSearch l=new LinearSearch();
                l.search(products, product_name);
                break;
            case "I":
                System.out.print("Enter ID to search:");
                int product_id=sc.nextInt();
                BinarySearch b=new BinarySearch();
                b.search(products, product_id);
                break;
            default:
                break;
        }

    }
}