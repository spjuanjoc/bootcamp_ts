console.log("7.Generics: Templates");
console.log("4.Template class");
{
class UnorderedMap<K,V>{
    private values : V[] = [];
    private keys : K[] = [];

    addItem(key: K, value: V){
        this.keys.push(key);
        this.values.push(value);
    }

    printItems()
    {
        console.log(this.keys);
        console.log(this.values);
    }
}

const strUMap = new UnorderedMap();
strUMap.addItem('key','val');
strUMap.addItem('key2','val2');
console.log(strUMap);

const numUMap = new UnorderedMap<number,number>();
numUMap.addItem(1,10);
numUMap.addItem(2,20);
console.log(numUMap);

const UMap = new UnorderedMap<number,string>();
UMap.addItem(1,'10');
UMap.addItem(2,'20');
console.log(UMap);
}
