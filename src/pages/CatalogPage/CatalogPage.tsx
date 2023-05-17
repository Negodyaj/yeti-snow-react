/* eslint-disable jsx-a11y/label-has-associated-control */
import './CatalogPage.scss';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { CustomSelect } from '../../shared/CustomSelect/CustomSelect';
import { ProductCard } from '../../shared/ProductCard/ProductCard';
import { RootState } from '../../store/store';
import { filter } from './catalogPage.slice';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    priceFrom: yup.number().default(0),
    priceTo: yup.number().default(1000000),
    size: yup.object({
      value: yup.number().default(undefined),
      label: yup.string().default(undefined),
    }),
    color: yup.object({
      value: yup.number().default(undefined),
      label: yup.string().default(undefined),
    }),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const CatalogPage = () => {
  const state = useSelector((state: RootState) => state.catalog);
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const sizeOptions = [
    { value: 1, label: 'XS' },
    { value: 2, label: 'S' },
    { value: 3, label: 'M' },
    { value: 4, label: 'L' },
    { value: 5, label: 'XL' },
  ];

  const colorOptions = [
    { value: 1, label: 'blue' },
    { value: 2, label: 'black' },
    { value: 3, label: 'orange' },
    { value: 4, label: 'yellow' },
    { value: 5, label: 'white' },
    { value: 6, label: 'red' },
  ];

  const onSubmit = (data: FormData) => {
    const payload = {
      priceFrom: data.priceFrom ?? 0,
      priceTo: data.priceTo ?? 1000000,
      size: data.size.label,
      color: data.color.label,
    };
    dispatch(filter(payload));
  };

  return (
    <div className="container">
      <h1>Catalog</h1>
      <div className="main-content">
        <div className="filters-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Price:</label>
            <div className="form-group">
              from
              <input type="text" placeholder="from" {...register('priceFrom')} />
              to
              <input type="text" placeholder="to" {...register('priceTo')} />
            </div>
            <label>
              Gender:
              <Controller
                name="size" // for the gender field
                control={control} // obtained from the useForm hook
                render={({ field }) => (
                  <CustomSelect options={sizeOptions} placeholder="Choose a size" field={field} />
                )}
              />
            </label>
            <label>
              Color:
              <Controller
                name="color" // for the gender field
                control={control} // obtained from the useForm hook
                render={({ field }) => (
                  <CustomSelect options={colorOptions} placeholder="Choose a color" field={field} />
                )}
              />
            </label>
            <div className="form-controls">
              <button type="submit">Apply filters</button>
              <button type="button" onClick={() => reset()}>Clear</button>
            </div>
          </form>
        </div>
        <div className="products-grid">
          {state.filteredProduct.map((product) => (
            <ProductCard
              key={`product-${product.id}`}
              title={product.title}
              imageColor={product.imageColor}
              colors={product.colors}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
