class Enemy
{
    name;
    maxHealth;
    health;
    constructor(name, maxHealth)
    {
        this.name = name;
        this.maxHealth = maxHealth;
        this.health = maxHealth;
    }
    Hurt(damage)
    {
        this.health -= damage;
        console.log(`Enemy ${this.name} took ${damage} damage and now has ${this.health} hp.`);
        if (this.health <= 0)
        {
            console.log(`Enemy ${this.name} is now dead.`);
            this.health = 0;
        }
    }
}

class Flier extends Enemy
{
    flying = false;
    Fly()
    {
        this.flying = true;
        console.log("Woosh");
    }
    Land()
    {
        this.flying = false;
        console.log("Plop");
    }
    Hurt(damage)
    {
        if (this.flying)
        {
            console.log("Can't hurt me!");
            return;
        }
        super.Hurt(damage);
    }
}

let enemy1 = new Enemy("Sam", 100);
let enemy2 = new Enemy("Juan", 10);
let enemy3 = new Flier("Birb", 10);

enemy1.Hurt(25);
enemy1.Hurt(25);
enemy1.Hurt(25);
enemy1.Hurt(25);
enemy2.Hurt(25);
enemy3.Fly();
enemy3.Hurt(10);
enemy3.Land();
enemy3.Hurt(10);

