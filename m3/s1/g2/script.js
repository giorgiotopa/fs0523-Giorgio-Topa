var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount() {
        this.balanceInit = 0;
    }
    SonAccount.prototype.deposit = function (amount) {
        this.balanceInit += amount;
    };
    SonAccount.prototype.withDraw = function (amount) {
        if (amount <= this.balanceInit) {
            this.balanceInit -= amount;
        }
        else {
            console.log("Fondi insufficienti per il prelievo.");
        }
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotherAccount.prototype.addInterest = function () {
        this.balanceInit += this.balanceInit * 0.1; // Aggiunge l'interesse del 10%
    };
    return MotherAccount;
}(SonAccount));
;
var sonAccount = new SonAccount();
var motherAccount = new MotherAccount();
console.log(sonAccount);
console.log(motherAccount);
sonAccount.deposit(100);
motherAccount.deposit(200);
console.log(sonAccount);
console.log(motherAccount);
sonAccount.withDraw(150);
motherAccount.withDraw(150);
console.log(sonAccount);
console.log(motherAccount);
motherAccount.addInterest();
console.log(motherAccount);
