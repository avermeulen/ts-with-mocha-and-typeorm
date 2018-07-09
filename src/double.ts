export default function double(name:string) : string{
    if (name === ""){
        return "";
    }
    return name + " : " + name;
}