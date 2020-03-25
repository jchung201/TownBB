import { Test } from '@nestjs/testing';
import { AdsService } from './ads.service';
import { AdRepository } from './models/ad.repository';
import { GetAdsFilterDTO } from './dtos/get-ads-filter.dto';
import { AdCategory } from './models/ad-category.enum';
import { NotFoundException } from '@nestjs/common';

const mockAdRepository = () => ({
  getAds: jest.fn(),
  findOne: jest.fn(),
});

describe('AdsService', () => {
  let adsService;
  let adRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AdsService,
        { provide: AdRepository, useFactory: mockAdRepository },
      ],
    }).compile();
    adsService = await module.get<AdsService>(AdsService);
    adRepository = await module.get<AdRepository>(AdRepository);
  });

  describe('getAds', () => {
    it('gets all ads from the repository', async () => {
      expect(adRepository.getAds).not.toHaveBeenCalled();
      adRepository.getAds.mockResolvedValue('Some Value');
      const filters: GetAdsFilterDTO = {
        category: AdCategory.LABOR,
        search: 'waiter',
      };
      const result = await adsService.getAds(filters);
      expect(adRepository.getAds).toHaveBeenCalled();
      expect(result).toEqual('Some Value');
    });
  });
  describe('getAdById', () => {
    it('calls adRepository.findOne() and succesffuly retrieve and return the ad', async () => {
      const mockAd = { title: 'Test ad', description: 'Test desc' };
      adRepository.findOne.mockResolvedValue(mockAd);

      const result = await adsService.getAdById(1);
      expect(result).toEqual(mockAd);

      expect(adRepository.findOne).toHaveBeenCalledWith(1);
    });
    it('throws an error as ad is not found', () => {
      adRepository.findOne.mockResolvedValue(null);
      expect(adsService.getAdById(1)).rejects.toThrow(NotFoundException);
    });
  });
});
