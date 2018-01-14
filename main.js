import {DanhSachSV} from './DSSV';
import {SinhVien} from './sinhvien';
require('./myCSS/mystyle.css');
require('./mystyle.scss');

var DSSV = new DanhSachSV();

function ThemSV(){
	var HTSV = document.getElementById("HTSV").value;
	var MSSV = document.getElementById("MSSV").value;
	var CMND = document.getElementById("CMND").value;
	var SDT = document.getElementById("SDT").value;
	var email = document.getElementById("email").value;

	var SVthem = new SinhVien(HTSV, MSSV, CMND, SDT, email);
	DSSV.themSV(SVthem);
	CapNhat();

}
window.ThemSV = ThemSV;

function SetStorage(){
	var jsonDSSV = JSON.stringify(DSSV.MangSV);
	localStorage.setItem("DanhSachSV",jsonDSSV);
}
window.SetStorage = SetStorage;

function GetStorage(){
	DSSV.MangSV = JSON.parse(localStorage.getItem("DanhSachSV"));
}
window.GetStorage = GetStorage;

function CapNhat(){
	var xuat = document.getElementById("xuat");
	xuat.innerHTML = "";
	for(var i = 0; i < DSSV.MangSV.length; i++){
		var sv = DSSV.MangSV[i];

		var TheTR = document.createElement("tr");
		var ThetdHTSV = thetd("htsv",sv.HTSV);
		var ThetdMSSV = thetd("mssv",sv.MSSV);
		var ThetdCMND = thetd("dt",sv.CMND);
		var ThetdSDT = thetd("dl",sv.SDT);
		var Thetdemail = thetd("dh",sv.email);

		TheTR.appendChild(ThetdHTSV);
		TheTR.appendChild(ThetdMSSV);
		TheTR.appendChild(ThetdCMND);
		TheTR.appendChild(ThetdSDT);
		TheTR.appendChild(Thetdemail);
		xuat.appendChild(TheTR);

	}

	function thetd(className,Value) {
		var tdTag = document.createElement("td");
		tdTag.className = className;
		tdTag.innerHTML = Value;
		return tdTag;
	}
}

