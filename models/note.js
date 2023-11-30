import mongoose from "mongoose";

const noteSchema = mongoose.Schema( {
	ten: { type: String, require: true },
	tuoi: { type: Number, require: true },
	gioiTinh: { type: String, require: true },
	trinDoHocVan: { type: String, require: true },
	dungSmartPhone: { type: String, require: true },
	diaChi: { type: String, require: true },
	tanSuatKham: { type: String, require: true },
	tienSuBoMe: { type: String, require: true },
	tienSuAnhChi: { type: String, require: true },
	thoiGianPhatHien: { type: String },
	ngayKhamBenh: { type: String },
	dieuTri: { type: String, require: true },
	nhomThuoc: { type: Array },
	hba1cLucDau: { type: String, require: true },
	tienSuBenh: { type: Array },
	Hb: { type: Number, require: true },
	Hema: { type: Number, require: true },
	Glu: { type: Number, require: true },
	Ure: { type: Number, require: true },
	Hba1c: { type: Number, require: true },
	Creatinin: { type: Number, require: true },
	eGFR: { type: Number, require: true },
	Cholesterol: { type: Number, require: true },
	LDLC: { type: Number, require: true },
	HDLC: { type: Number, require: true },
	Trigly: { type: Number, require: true },
	Na: { type: Number, require: true },
	K: { type: Number, require: true },
	Ca: { type: Number, require: true },
	Protein: { type: String, require: true },
	sieuAm: { type: String, require: true },
	khamMat: { type: String, require: true },
	ghiChu: { type: String, },
}, 
  {
    collection: "note",
  }
);

export default mongoose.model("Notes", noteSchema);

