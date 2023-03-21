import java.io.FileInputStream;
import java.io.ObjectInputStream;
public class DeserializeTest{
    public static void main(String args[]) throws Exception{
        //Read the serialized data back in from the file "name.ser"
        FileInputStream fis = new FileInputStream("name.ser");
        ObjectInputStream ois = new ObjectInputStream(fis);
        //Read the object from the data stream, and convert it back to a String
        String nameFromDisk = (String)ois.readObject();
        //Print the result.
        System.out.println(nameFromDisk);
        ois.close();
    }
}

