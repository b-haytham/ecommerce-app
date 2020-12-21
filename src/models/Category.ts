import mongoose from "mongoose"

interface CategoryAttrs {
    
	name: string;
	description: string ;
	image : string;
	

}

interface CategoryModel extends mongoose.Model<CategoryDoc> {
	build(attrs: CategoryAttrs): CategoryDoc;
}

interface CategoryDoc extends mongoose.Document {
	name: string;
	description: string ;
	image : string;
	

}
const categorySchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		description: { type: String , required:true },
		image: { type: String, required: true,},
	},
	{
		timestamps: true
	}
);
categorySchema.statics.build = (attrs: CategoryAttrs) => {
	return new Category(attrs);
};

const Category = mongoose.model<CategoryDoc, CategoryModel>('Category', categorySchema);

export default Category;