package com.devsuperior.dsmovie.services;

import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.IdGenerator;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

@Service
public class MovieServices {
	
	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly =true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		Page<Movie> result = repository.findAll(pageable);
		Page<MovieDTO> page = result.map(x->new MovieDTO(x));
		return page;
	}
	
	@Transactional(readOnly =true)
	public Page<MovieDTO> findAllSortedByName(Pageable pageble) {
		Page<Movie> result = repository.findAll(repository.pageByTitle);
		Page<MovieDTO> page =  result.map(x->new MovieDTO(x));
		return page;
	}
	@Transactional(readOnly =true)
	public Page<MovieDTO> findAllSortedByScore(Pageable pageble) {
		Page<Movie> result = repository.findAll(repository.pageByScore);
		Page<MovieDTO> page =  result.map(x->new MovieDTO(x));
		return page;
	}
	@Transactional(readOnly =true)
	public Page<MovieDTO> findAllSortedByCount(Pageable pageble) {
		Page<Movie> result = repository.findAll(repository.pageByCount);
		Page<MovieDTO> page =  result.map(x->new MovieDTO(x));
		return page;
	}
	
	@Transactional(readOnly =true)
	public MovieDTO findById(Long id) {
		Movie result = repository.findById(id).get();
		MovieDTO dto = new MovieDTO(result);
		return dto;
	}
}
