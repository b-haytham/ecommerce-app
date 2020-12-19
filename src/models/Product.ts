import mongoose from "mongoose"




interface ProductAttrs {
    
	name: string;
	description: string ;
	price: number ;
	stock_count: number;
	image : string,
	category: string ;

}

interface ProductModel extends mongoose.Model<ProductDoc> {
	build(attrs: ProductAttrs): ProductDoc;
}
interface ProductDoc extends mongoose.Document {
	name: string;
	description: string ;
	price: number ;
	stock_count: number;
	image : string,
	category: string ;

}
const productSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		description: { type: String , required: true },
		price: { type: Number, required: true, },
		stock_count:  { type: Number, required: true},
		image: { type: String, required: true },
		category: {
			type: mongoose.Schema.Types.ObjectId,
			//required: true,
			ref: 'Category',
		  },

	},
	{
		timestamps: true,
	}
);

productSchema.statics.build = (attrs: ProductAttrs) => {
	return new Product(attrs);
};

const Product = mongoose.model<ProductDoc, ProductModel>('Product', productSchema);
export default Product;