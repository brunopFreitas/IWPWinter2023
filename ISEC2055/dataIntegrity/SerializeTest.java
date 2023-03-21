import java.io.FileOutputStream;
import java.io.ObjectOutputStream;
public class SerializeTest{
    public static void main(String args[]) throws Exception{
        //This is the object we're going to serialize.
        String name = "bob";
        //We'll write the serialized data to a file "name.ser"
        FileOutputStream fos = new FileOutputStream("name.ser");
        ObjectOutputStream os = new ObjectOutputStream(fos);
        os.writeObject(name);
        os.close();
    }
}

